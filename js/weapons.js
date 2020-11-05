let counterWeapon = 0
const weaponsArr = []

const kWeapon = 136 / 129
const weaponW = 20
const weaponH = weaponW / kWeapon
let weaponX = Math.floor(Math.random() * (canvas.width))
let weaponY = Math.floor(Math.random() * (canvas.height))
const minWeapon = 0
const maxWeapon = emojiWeaponArr.length

const createWeapon = () => {
    if(Date.now() - dateWeapons >= 6000){
        dateWeapons = Date.now()
        weaponX = Math.floor(Math.random() * (canvas.width))
        weaponY = Math.floor(Math.random() * (canvas.height))
        let weaponRandom = Math.floor(Math.random() * (maxWeapon - minWeapon) + minWeapon)
        
        let newWeapon = new ImageCreation(weaponW, weaponH, weaponX, weaponY, imgWeaponArr[weaponRandom])

        weaponsArr.push(newWeapon)

    }
}

const drawWeapon = () => {
    weaponsArr.forEach(weapon => {
        weapon.draw()
    })
}