// import ProductList from '@/components/shared/product/product-list'
// import { getLatestProducts } from '@/lib/actions/product.actions'
// import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
// import { Metadata } from 'next'

// export default async function Home() {
//   const latestProducts = await getLatestProducts()
//   return (
//     <div>
//       <ProductList title="Newest Arrivals" data={latestProducts} />
//     </div>
//   )
// }

import ProductList from '@/src/components/shared/product/product-list'
import sampleData from '@/src/lib/sample-data'

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={sampleData.products} />
    </div>
  )
}

// 다예가 쓴거 삭제함. 점점 추가 중/ㅇㅋ
