import PropTypes from 'prop-types'


function PercentageStat(props) {

    let percentage = (props.numerator / props.denominator)

    percentage = Math.round(percentage * 100)


    return (
        <div>
            <h2>{percentage} %</h2>
            <span>{props.label}</span>
        </div>
    )

}

// PercentageStat.propTypes = {
//   numerator: PropTypes.number.isRequired,
//   denominator: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired
// }

function checkDenominator(props, propName, componentName) {
    console.log(`🚀 ~ checkDenominator ~ componentName`, componentName)
    console.log(`🚀 ~ checkDenominator ~ propName`, propName)
    console.log(`🚀 ~ checkDenominator ~ props`, props)

    if (props[propName] === 0) {
        return new Error(`Invalid Prop ${propName} cannot be 0`)
    }

}


PercentageStat.propTypes = {
    numerator: PropTypes.number.isRequired,
    denominator: checkDenominator,
    label: PropTypes.oneOf(["Profit", "Loss", "Revenue"])
}

export {PercentageStat}