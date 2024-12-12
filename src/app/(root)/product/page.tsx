// import ProductList from 'src/components/shared/product/product-list'
// import sampleData from 'src/lib/sample-data'

// export default function Home() {
//   return (
//     <div className="space-y-8">
//       <h2 className="h3-bold">전자책 구매</h2>
//       <ProductList data={sampleData.products} />
//     </div>
//   )
// }

// import ProductList from 'src/components/shared/product/product-list'
// import sampleData from 'src/lib/sample-data'
// import { getLatestProducts } from '@/lib/actions/product.actions'
// import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
// import { Metadata } from 'next'

// export default function Home() {
//   return (
//     <div className="space-y-8">
//       <h2 className="h2-bold">전자책 구매</h2>
//       <ProductList data={sampleData.products} />
//     </div>
//   )
// }

// import ProductList from '@/components/shared/product/product-list'
// import { getLatestProducts } from '@/lib/actions/product.actions'
// import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import ProductList from 'src/components/shared/product/product-list'
import { getLatestProducts } from 'src/lib/actions/product.actions'
import { APP_DESCRIPTION, APP_NAME } from 'src/lib/constants'

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default async function Home() {
  const latestProducts = await getLatestProducts()
  return (
    <div>
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  )
}
