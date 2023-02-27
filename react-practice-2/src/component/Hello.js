import './Hello.css'
/*첫번재 방법
const Hello=()=>{
    <p>Hello</p>;
};

export default Hello; */

//두번째 방법
export default function Hello() {

    return(
        <div>
            <p style={
            {color:'pink',
        marginBottom:"50px"}
        }>Hello</p>
        <div className="box">Hello's color</div>
        </div>
        
    )
} 