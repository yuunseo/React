import styles from './Hello.module.css'
/*첫번재 방법
const Hello=()=>{
    <p>Hello</p>;
};

export default Hello; */

//두번째 방법
export default function Hello() {

    function showName(){
        console.log("Yunseo");
    }

    function showText(e){
        if(e.key === 'Enter'){
            console.log(e.target.value);
        };
    }

    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show Name</button>
            <button onClick={()=>{console.log("21");}}>Show Age</button>
            <input type="text" onKeyPress={showText}></input>
        </div>
        
    )
} 