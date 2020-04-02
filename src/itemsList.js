import Faker from 'faker'

let items = []


for (let i = 0; i < 30; i++){
    items.push({
        name: Faker.name.title(),
        price: Faker.finance.amount(),
        img: Faker.image.food(),
        desc: Faker.lorem.sentence()

    })
}

export default items