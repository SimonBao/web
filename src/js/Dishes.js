import React, { Component } from "react";
import menu from './menu';



export default class Dishes extends Component{
    render(){
        let dishes;
        let content = [];

        Object.keys(menu).forEach(key => {
            dishes = menu[key];
            dishes.forEach(dish => {
                let dishHtml = (
                    <tr>
                        <td class="border-dashed border-t border-gray-200">
                            <span class="text-gray-700 px-6 py-3 flex items-center" >{dish.id}</span>
                        </td>
                        <td class="border-dashed border-t border-gray-200 ">
                            <span class="text-gray-700 px-6 py-3 flex items-center" >{dish.name}</span>
                        </td>
                        <td class="border-dashed border-t border-gray-200 ">
                            <span class="text-gray-700 px-6 py-3 flex items-center" >{`£${dish.price.toFixed(2)}`}</span>
                        </td>
                    </tr>
                );
                content = [...content, dishHtml]
            })
            // console.log(menu[key]);
            //use key and value here
        });

    return (
        <div class="flex px-2 py-2 w-1/2 h-1/2 justify-center">
            <div className="overflow-auto">
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
    </div>
    );
}
}



