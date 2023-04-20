export const deleteProduct = async (id) => {
    const response = await fetch("/product/" + id, {
        method: "DELETE"
    })
}