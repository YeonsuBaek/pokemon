import { Button } from '@yeonsubaek/yeonsui'
import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <figure className="mb-4">
        <img className="mb-4 w-full aspect-square max-w-[400px]" src="http://placehold.it/400x400" alt="Name" />
        <figcaption className="flex flex-col items-center">
          <span className="text-gray-500">No.1</span>
          <h2 className="text-2xl font-bold">Name</h2>
        </figcaption>
      </figure>
      <dl className="flex justify-between mb-4 px-5 py-4 border border-gray-300 rounded w-full max-w-[400px]">
        <div className="flex items-start justify-start gap-2">
          <dt className="text-gray-500">타입</dt>
          <dd>풀, 독</dd>
        </div>
        <div className="flex items-start justify-start gap-2">
          <dt className="text-gray-500">키</dt>
          <dd>8</dd>
        </div>
        <div className="flex items-start justify-start gap-2">
          <dt className="text-gray-500">몸무게</dt>
          <dd>8</dd>
        </div>
      </dl>
      <ul className="flex mb-4">
        <li className="after:content-['▶️'] after:mx-4 flex items-center">
          <figure className="flex flex-col items-center">
            <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
            <figcaption className="flex flex-col items-center">
              <span className="text-gray-500">No.1</span>
              <h2>Name</h2>
            </figcaption>
          </figure>
        </li>
        <li className="after:content-['▶️'] after:mx-4 flex items-center">
          <figure className="flex flex-col items-center">
            <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
            <figcaption className="flex flex-col items-center">
              <span className="text-gray-500">No.1</span>
              <h2>Name</h2>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure className="flex flex-col items-center">
            <img className="mb-2 w-[100px] h-[100px]" src="http://placehold.it/100x100" alt="Name" />
            <figcaption className="flex flex-col items-center">
              <span className="text-gray-500">No.1</span>
              <h2>Name</h2>
            </figcaption>
          </figure>
        </li>
      </ul>
      <Link to="/">
        <Button>목록으로</Button>
      </Link>
    </div>
  )
}

export default Pokemon
