interface HeaderMenu {
  title: string
  url: string
}

const headerMenu: HeaderMenu[] = [
  {
    title: '채용 공고',
    url: '/',
  },
  {
    title: '기업별',
    url: '/company',
  },
  {
    title: '실시간 공고',
    url: '/realtime',
  },
  {
    title: '맞춤 공고',
    url: '/custom',
  },
  {
    title: '공고 제보',
    url: '/news',
  },
  {
    title: '오픈 채팅',
    url: '/today',
  },
]

export default headerMenu
