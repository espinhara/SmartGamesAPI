// import config from"../../config";
export default ({ PurchaseService }) => {
    const controller = {}

    controller.list = (req, res, next) => {
        PurchaseService.list()
            .then(ModelList => res.status(200).send(ModelList))
            .catch(next)
    }

    controller.get = (req, res, next) => {
        const id = req.params.id

        PurchaseService.get(id)
            .then(Data => res.status(200).send(Data))
            .catch(next)
    }

    controller.save = (req, res, next) => {
        PurchaseService.save(req.body)
            .then(Data => res.status(200).send(Data))
            .catch(next)
    }

    return controller
}
