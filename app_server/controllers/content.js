const cars = [
    {
        id: 1,
        make: 'Audi',
        model: 'A6 C7',
        engine: '2.0 Tdi',
        power: '177Hp',
        year: 2015,
        price: '14,500',
        mileage: '177,000',
        fuel: 'Diesel',
        transmission: 'Automatic',
        image: 'https://primary.jwwb.nl/public/j/w/n/temp-mdjsksuaqfulgktptwwc/1-high-h4l79t.jpg'
    },
    {
        id: 2,
        make: 'Audi',
        model: 'A7',
        engine: '3.0 BiTdi',
        power: '313Hp',
        year: 2018,
        price: '26,500',
        mileage: '135,000',
        fuel: 'Diesel',
        transmission: 'Automatic',
        image: 'https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3132/U170/IMG_5102-large.jpg'
    },
    {
        id: 3,
        make: 'Audi',
        model: 'A8',
        engine: '4.2 Tdi',
        power: '381Hp',
        year: 2017,
        price: '32,500',
        mileage: '118,000',
        fuel: 'Diesel',
        transmission: 'Automatic',
        image: 'https://canautoperformance.com/cdn/shop/collections/D4_S8.jpg?v=1694187536&width=2048'
    },
    {
        id: 4,
        make: 'Audi',
        model: 'A6 C8',
        engine: '40 TFSI',
        power: '204Hp',
        year: 2020,
        price: '64,500',
        mileage: '78,000',
        fuel: 'Petrol',
        transmission: 'Automatic',
        image: 'https://images.clickdealer.co.uk/vehicles/8002/8002988/large2/195955768.jpg'
    }
];


const inventory = (req,res) =>{
    res.render('inventory', {
        cars
    });
};

const content = function(req,res){
    const carID = Number(req.params.id);
    const car = cars.find(car => car.id === carID);
    
    console.log("Requested ID: ", carID);
    console.log("Found Car:", car);

    res.render('inventory',{
        title: car.model,
        car: car
    });
}

module.exports = {
    content,
    inventory
}