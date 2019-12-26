export default {
    name: 'my-input',
    props: {
        placeholder: {
            type: String,
            required: true,
            default: 'Name'
        },
        value: {
            type: String,
            required: true
        },
        error: {
            type: Object,
            default: null
        }
    }
}
