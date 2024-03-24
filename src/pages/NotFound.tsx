import { Button } from '@yeonsubaek/yeonsui'
import { Link } from 'react-router-dom'
import MetaTag from '../components/block/MetaTag'

const NotFound = () => {
  return (
    <>
      <MetaTag
        title="포켓몬 도감 사이트 | 접근할 수 없는 페이지"
        description="죄송합니다. 원하시는 페이지를 찾을 수 없습니다."
        keywords="Pokemons, 포켓몬, 포켓몬 도감"
      />
      <div className="flex-col h-[80vh] flex-center">
        <h2 className="text-2xl font-bold">404 ERROR</h2>
        <p className="mb-10">죄송합니다. 원하시는 페이지를 찾을 수 없습니다.</p>
        <Link to="/">
          <Button>돌아가기</Button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
