import "./style.css";

export default function Botoes(){
    return (
        <table>
            <tr>
                <td colSpan={4}><input className="inputCalc"></input></td>
            </tr>
            <tr>
                <td><button className="btn_num">C</button></td>
                <td><button className="btn_num">()</button></td>
                <td><button className="btn_num">%</button></td>
                <td><button className="btn_num">/</button></td>
            </tr>
            <tr>
                <td><button className="btn_num">7</button></td>
                <td><button className="btn_num">8</button></td>
                <td><button className="btn_num">9</button></td>
                <td><button className="btn_num">*</button></td>
            </tr>
            <tr>
                <td><button className="btn_num">4</button></td>
                <td><button className="btn_num">5</button></td>
                <td><button className="btn_num">6</button></td>
                <td><button className="btn_num">-</button></td>
            </tr>
            <tr>
                <td><button className="btn_num">1</button></td>
                <td><button className="btn_num">2</button></td>
                <td><button className="btn_num">3</button></td>
                <td><button className="btn_num">+</button></td>
            </tr>
            <tr>
                <td><button className="btn_clear">clear</button></td>
                <td><button className="btn_clear">,</button></td>
                <td><button className="btn_num">0</button></td>
                <td><button className="btn_num">=</button></td>
            </tr>
        </table>
    )
}