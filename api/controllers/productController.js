// import config from"../../config";
export default ({ ProductService }) => {
    const controller = {}

    controller.list = (req, res, next) => {
        ProductService.list()
            .then(ModelList => res.status(200).send(ModelList))
            .catch(next)
    }

    controller.get = (req, res, next) => {
        const id = req.params.id

        ProductService.get(id)
            .then(Data => res.status(200).send(Data))
            .catch(next)
    }

    return controller
}
