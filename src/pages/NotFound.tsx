import { Button } from '@yeonsubaek/yeonsui'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex-col h-[80vh] flex-center">
      <h2 className="text-2xl font-bold">404 ERROR</h2>
      <p className="mb-10">죄송합니다. 원하시는 페이지를 찾을 수 없습니다.</p>
      <Link to="/">
        <Button>돌아가기</Button>
      </Link>
    </div>
  )
}

export default NotFound
