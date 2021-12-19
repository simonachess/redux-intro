import { connect } from "react-redux";
import { getGirls } from '../Selectors/namesSelectors'

function Girls({ girls }) {

    return (
        <ul className="girls">{
            girls.map((g, i) => <li key={i}>{g}</li>)
        }
        </ul>
    )
}

const mapStateToProps = state => {
    const girls = getGirls(state) //panaudojame Selectoriu
    return { girls }
}

export default connect(mapStateToProps)(Girls);