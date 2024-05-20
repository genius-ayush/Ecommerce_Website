import { EcommerceCard } from "./EcommerceCard"
function MostPopular() {
  return (
    <div>
      <div className="font-mono text-3xl font-medium flex items-center justify-center p-8 mt-9">Most Popular</div>
      <div className="flex gap-2">
      <EcommerceCard/>
      <EcommerceCard/>
      <EcommerceCard/>
      <EcommerceCard/>
      <EcommerceCard/>
      <EcommerceCard/>
      <EcommerceCard/>  
      </div>

    </div>
  )
}

export default MostPopular