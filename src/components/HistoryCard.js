export default function HistoryCard (props) {
  const listData = props.data
  return (
    <>  
    {
      JSON.stringify(listData.data)
    }
       <div className="ml-6 pt-1 bg-white rounded-lg mr-5 mb-5 shadow">
         {
           listData.data !== 'Genesis block' ? (
             <>
             <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded ml-2 mt-2 mb-2 shadow-md">{ new Date(listData.timestap.$date).toLocaleDateString() }</span>
              <h1 className="text-2xs text-blue-700 leading-tight pl-2 pb-2 text-justify pr-3">
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded mt-2 shadow-md">Product Name</span> : { props.name }
              </h1>
              <h1 className="text-2xs text-blue-700 leading-tight pl-2 pb-2 text-justify pr-3">
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded mt-2 shadow-md">Location</span> : { 
                  listData.data.location ? listData.data.location : ('Fresh from farmer')
                }
              </h1>
              <h1 className="text-2xs text-blue-700 leading-tight pl-2 pb-2 text-justify pr-3">
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded mt-2 shadow-md">Amount</span> : { 
                  listData.data.amount ? listData.data.amount : ('-')
                }
              </h1>
             </>
             )
           : (
              <>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded ml-2 mt-2 mb-2 shadow-md">{ new Date(listData.timestap.$date).toLocaleDateString() }</span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-tight text-indigo-100 bg-blue-700 rounded ml-2 mt-2 mb-2 shadow-md">your item's history starts here</span>
              </>
             )
          }
       </div>
    </>
  )
}