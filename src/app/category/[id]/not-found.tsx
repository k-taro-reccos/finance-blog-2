import { Aside } from "@/app/components/Aside"
import { Search } from "@/app/components/Search"
import { getCategoryList } from "libs/client"
import Link from "next/link"
import React from "react"
import { HiChevronRight, HiHome } from "react-icons/hi"

const NotFound = async () => {
  const { contents: categories } = await getCategoryList()

  return (
    <>
      <ul className="flex items-center space-x-1 py-4 text-sm text-gray-500 dark:text-white">
        <li>
          <Link
            href="/"
            className="flex items-center space-x-1 hover:underline"
          >
            <HiHome className="h-4 w-4" />
            <span>ホーム</span>
          </Link>
        </li>
        <li className="flex items-center space-x-1">
          <HiChevronRight className="h-5 w-5" />
          <span>記事が見つかりませんでした。</span>
        </li>
      </ul>
      <div className="md:flex">
        <div className="md:flex-1">
          <div className="rounded bg-white p-4 dark:border dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <h1 className="mt-12 text-center text-3xl font-bold tracking-wider">
              記事が見つかりませんでした。
            </h1>
            <p className="mt-12 text-center">
              以下の方法からもう一度目的のページをお探しください。
            </p>
            <div className="mt-12">
              <h2 className="rounded border-l-4 border-primary-color bg-blue-100 py-3 pl-4 text-xl font-bold dark:border-gray-800 dark:bg-gray-800">
                1. 検索して見つける
              </h2>
              <p className="mt-6">
                以下よりキーワードを入力して検索してください。
              </p>
              <div className="mt-6 rounded border dark:border-none">
                <Search />
              </div>
              <div className="mt-12">
                <h2 className="rounded border-l-4 border-primary-color bg-blue-100 py-3 pl-4 text-xl font-bold dark:border-gray-800 dark:bg-gray-800">
                  2. カテゴリーから見つける
                </h2>
                <ul className="mt-6 list-inside list-disc space-y-4 pl-4">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/category/${category.id}`}
                        className="tracking-wider text-gray-500 hover:underline dark:text-white"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <aside className="mt-12 md:ml-8 md:mt-0 md:w-[25%]">
          {/* @ts-expect-error Server Component */}
          <Aside />
        </aside>
      </div>
    </>
  )
}

export default NotFound
