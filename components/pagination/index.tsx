
import React, { FunctionComponent } from 'react'
import Link from 'next/link'

import { getNumberOfPages } from "../../localFunctions/importPosts"
import { whatNumbersToshow } from "../../localFunctions/paginationLogic"
import { useRouter } from 'next/router'


import { numberOfPostsOnPage } from "../../public/variables"
type PaginationProps = {

}
const Pagination: FunctionComponent<PaginationProps> = () => {

  const router = useRouter()
  const pageNumber: any = router.query.id
  const pageNumber1 = router.asPath
  const test = router
  //const test = pageNumber1.search("/")


  const listPages = getNumberOfPages(numberOfPostsOnPage);


  const arrayOfNumbers = Array.from(Array(listPages + 1).keys())
  const [, ...removeFirstElement] = arrayOfNumbers;


  return (<Pagination1 current={Number(pageNumber)} total={Number(listPages)} />)
}

type PaginationProps1 = {
  current: number, total: number
}


const Pagination1: FunctionComponent<PaginationProps1> = ({ current, total }) => {

  const paginationNumbers = whatNumbersToshow(current, total)

  const hover = "z-20 bg-indigo-50 border-indigo-500 text-indigo-600"
  const notHover = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
  const back10 = current > 11 ? current - 10 : 1
  const back1 = current > 1 ? current - 1 : 1

  const front10 = total - current > 11 ? current + 10 : total
  const front1 = total - current > 1 ? current + 1 : total





  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
    </a>
        <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
    </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">

        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

            {/* skip  10*/}
            {current !== 1 && <Link href={{
              pathname: '/net-binnen/[slug]',
              query: { slug: back10.toString() },
            }}>
              <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>

                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>}



            {/* skip  1*/}
            {current !== 1 &&
              <Link href={{
                pathname: '/net-binnen/[slug]',
                query: { slug: back1.toString() },
              }}>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>

                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            }

            {/* first number*/}
            {current > 2 &&
              <Link href={{
                pathname: '/net-binnen/[slug]',
                query: { slug: "1" },
              }}>
                <a href="#" aria-current="page" className={`z-10   bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                  1
        </a>
              </Link>
            }
            {current > 3 && <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              ...
        </a>}


            {paginationNumbers.map((paginationNumber) => {
              return (<Link href={{
                pathname: '/net-binnen/[slug]',
                query: { slug: paginationNumber.toString() },
              }}><a href="#" className={` ${current === paginationNumber ? hover : notHover}  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
                  {paginationNumber}
                </a></Link>)
            })}


            {total - current >= 3 && <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              ...
        </a>}

            {total - current > 1 &&
              <Link href={{
                pathname: '/net-binnen/[slug]',
                query: { slug: total.toString() },
              }}>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  {total}
                </a>
              </Link>}


            {/* skip  1*/}
            {current !== total && <Link href={{
              pathname: '/net-binnen/[slug]',
              query: { slug: front1.toString() },
            }}><a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>

                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a></Link>}


            {/* skip  10*/}
            {current !== total &&
              <Link href={{
                pathname: '/net-binnen/[slug]',
                query: { slug: front10.toString() },
              }}><a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>

                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            }
          </nav>
        </div>
      </div>
    </div >
  )
}


export default Pagination