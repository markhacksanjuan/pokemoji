const weaponsArr = []
const kWeapon = 136 / 129
const weaponW = 136
const weaponH = weaponW / kWeapon
const minWeapon = 0
const maxWeapon = emojiWeaponArr.length
const emojiWeaponNameArr = emojiWeaponArr.map(item => {
    return item.name
})
let counterWeapon = 0

const createWeapon = () => {
    counterWeapon++
    if(counterWeapon % 100 === 0){
        let weaponX = Math.floor(Math.random() * (canvas.width))
        let weaponY = Math.floor(Math.random() * (canvas.height))
        let weaponRandom = Math.floor(Math.random() * (maxWeapon - minWeapon) + minWeapon)
        const newWeapon = new Weapon(weaponW, weaponH, weaponX, weaponY, emojiWeaponArr[weaponRandom].src)
        weaponsArr.push(newWeapon)
        console.log(newWeapon)
        newWeapon.draw()
        
    }
}
const drawWeapon = () => {
    createWeapon()
    weaponsArr.forEach(weapon => {
        weapon.draw()
    })
}