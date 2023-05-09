import Image from "next/image"
import Link from "next/link"
import { Category } from "types"

type CategoryData = {
  contents: Category[]
}

const getCategories = async () => {
  const res = await fetch(
    "https://finance-blog.microcms.io/api/v1/categories",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
      },
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const data: CategoryData = await res.json()

  return data.contents
}

export const CategoryList = async () => {
  const categories = await getCategories()

  return (
    <nav>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((category) => (
          <li className="relative" key={category.id}>
            <Link
              href={`/category/${category.id}`}
              as={`/category/${category.id}`}
              prefetch={false}
              className="block shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute left-2 top-2 z-10 rounded bg-white px-2 text-sm sm:text-xs md:text-sm">
                {category.name}
              </span>
              <div className="relative aspect-[2/1] sm:aspect-[5/3]">
                <Image
                  src="https://source.unsplash.com/M_UOjtOZ-C4"
                  alt={category.name}
                  fill
                  priority
                  sizes="(max-width: 767px) 50vw, 25vw"
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}