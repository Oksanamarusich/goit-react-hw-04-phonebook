
import {ContainerFilter, Label, FilterInput } from "./Filter.styled"

export const Filter = ({ filter, onChangeFilter }) => {
    return (<ContainerFilter>
        <Label>
            Find contact by name 
        </Label>
            <FilterInput 
                type="text"
                name="name"
                defaultValue={filter}
                onChange={evt => {
                    onChangeFilter(evt.target.value)
                }}
                />
        
    </ContainerFilter>
    )
}
// export const Filter = ({filter, onChahgeFilter}) => {
//     return <div>
//         <label>
//             Find contact by name
//             <input
//                 type="text"
//                 value={filter}
//                 onChahge={evt => onChahgeFilter('filter', evt.target.value)}>
                
//             </input>
//         </label>
//     </div>
// }