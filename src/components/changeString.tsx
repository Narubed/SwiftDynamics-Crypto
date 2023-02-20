import cryptotax from '../uilt/crypto_tax'

export default function changeString() {
    let value: { id: number; name: string; coin: string; price: number; amount: number, profit: number, salary: number }[] = []
    const newString = cryptotax.split(/(\r\n|\n|\r)/gm)
    const removeN = newString.filter((item: string) => item !== '\n')
    const newArray: { id: number; name: string; coin: string; price: number; amount: number, profit: number, salary: number }[] = []
    removeN.forEach((element: string, index) => {
        const splitStr = element.split(" ")
        const data = {
            id: index + 1,
            name: splitStr[0],
            coin: splitStr[1],
            price: parseFloat(splitStr[2]),
            amount: parseFloat(splitStr[3]),
            profit: 0,
            salary: 0
        }
        newArray.push(data)
    })
    value = newArray

    return value
}
