import { calculateInvestmentResults } from "../util/investment.js";
import PropTypes from 'prop-types';

export default function Result({ input }) {
    console.log(input);
    const resultData = calculateInvestmentResults(input);
    console.log(resultData);

    return(
        <p>Result page</p>
    );
}

// Below code to remove EsLint error: 'xyz' is missing in props validationeslintreact/prop-types
Result.propTypes = {
    input: PropTypes.object,
};
