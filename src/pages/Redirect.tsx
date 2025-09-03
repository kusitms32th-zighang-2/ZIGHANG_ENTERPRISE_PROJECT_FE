import api from '@/apis/api'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const code = queryParams.get('code')
    console.log(code)

    if (code) {
      api
        .post('/auth/login/kakao', null, { params: { code } })
        .then((res) => {
          const { userId, accessToken, refreshToken } = res.data.result
          localStorage.setItem('userId', userId)

          if (res.data.code === '200') {
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
            navigate('/profile')
          } else {
            navigate('/login')
          }
        })
        .catch((err) => {
          console.log(err)
          navigate('/login')
        })
    }
  }, [navigate])

  return <div />
}

export default Redirect
