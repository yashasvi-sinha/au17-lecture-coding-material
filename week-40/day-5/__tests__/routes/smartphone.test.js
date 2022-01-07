const { dbConnect, dbDisconnect } = require('../../util/db')
const SmartPhoneModel = require('../../model/Smartphone')
const supertest = require('supertest')
const { app } = require('../../app')

const dummyData = [
    {
        name: "IPhone",
        price: 9999999,
        inStock: false,
    },
    {
        name: "Nokia",
        price: 0.5855,
        inStock: true,
    }
]

beforeAll(async () => {

    await dbConnect()
    await SmartPhoneModel.insertMany(dummyData)

})

afterAll(async () => {
    await dbDisconnect()
})



describe('SmartPhone Route', () => {

    describe('Given a POST request to /api/smartphones', () => {

        test('should return a 201 Status', async () => {

            await supertest(app)
                .post('/api/smartphones')
                // send allows to send payload for the post request
                .send({
                    name: "Nokia",
                    price: 0.5855,
                    inStock: true,
                })
                .expect(201)
        })

    })

    describe('Given a GET request to /api/smartphones', () => {

        test('should return a 200 Status', async () => {

            await supertest(app)
                .get('/api/smartphones')
                .expect(200)
        })

        test('should return an array', async () => {

            await supertest(app)
                .get('/api/smartphones')
                //this expect is of Supertest which also accepts a callback so that you can do custom tests
                .expect((response) => {
                    
                    //this expect is of Jest
                    expect(Array.isArray(response.body)).toBeTruthy()
                    expect(response.body).toHaveLength

                })
        })

    })

    // describe('Given a POST request to /api/smartphone', () => {

    //     test('should insert a new SmartPhone Document', () => {
    //         expect(true).toBe(true)
    //     })

    //     test('should have 201 as the HTTP status code', () => {
    //         expect(true).toBe(true)
    //     })

    // })

})

