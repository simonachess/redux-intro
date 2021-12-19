import { connect } from "react-redux";
import { getBoys } from '../Selectors/namesSelectors'

function Boys({ boys }) {

    return (
        <ul className="boys">{
            boys.map((b, i) => <li key={i}>{b}</li>)
        }
        </ul>
    )
}

const mapStateToProps = state => {
    const boys = getBoys(state) //panaudojame Selectoriu
    return { boys }
}

export default connect(mapStateToProps)(Boys);