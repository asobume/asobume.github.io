
import React from 'react'


const ResultForm1 = (props: any) => {

    console.log(props);

    let title = props.title;

    return (
        <div>
            <p>Test2</p>
            <p>{title}</p>
        </div>
    )

}
export default ResultForm1

// export async function getStaticProps() {
//     return {
//         props: {},
//     }
// }
