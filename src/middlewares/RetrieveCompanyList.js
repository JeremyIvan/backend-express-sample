const client = require('../gateways/DatabaseConnection')

const RetrieveCompanyList = async () => {
    const result = await client
        .select('*')
        .from('companies')
        .paginate({
            perPage: 2,
            currentPage: 2,
            isLengthAware: true
        })

    return result
}

module.exports = RetrieveCompanyList