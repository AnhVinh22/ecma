import data from "../data";
const Dashboard = {
        render() {
            return `
       <div class="flex flex-col mt-[20px]" >
       <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
           <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
             <table class="min-w-full divide-y divide-gray-200">
               <thead class="bg-gray-50">
                 <tr>
                   <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     ID
                   </th>
                   <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Title
                   </th>
                   <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Dec
                   </th>
                   <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Action
                   </th>
                   <th scope="col" class="relative px-6 py-3">
                     <span class="sr-only">Edit</span>
                   </th>
                 </tr>
               </thead>
               <tbody class="bg-white divide-y divide-gray-200" >
                ${data.map((post) => `
                 <tr>
                   <td class="px-6 py-4 whitespace-nowrap">
                     <div class="flex items-center">
                        ${post.id}
                     </div>
                   </td>
                   <td class="px-6 py-4 whitespace-nowrap">
                        ${post.title}
                   </td>
                   <td class="px-6 py-4 whitespace">
                        ${post.desc}
                   </td>
                   <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-[10px]">Edit</a>
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                    </td>
                  
                 </tr>
     
                 <!-- More people... -->
                 `).join("")}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
       `;
    },
};
export default Dashboard;