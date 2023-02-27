import styles from './Hello.module.css'
/*첫번재 방법
const Hello=()=>{
    <p>Hello</p>;
};

export default Hello; */

//두번째 방법
export default function Hello() {

    return(
        <div>
            <h1>Hello</h1>
            <h2>State</h2>
        </div>
        
    )
} 