exports.testMode = false

exports.logMode = true
exports.logModeBaileys = false

exports.info = {
    prefix: this.testMode ? '#' : '.',
    parentPrefix: ['.', '/', '!', '#'],
    dono: {
        nome: "Lavender",
        numero: [
            "COLOQUE_SEU_NUMERO_AQUI_DESSA_FORMA: 6287760550924@s.whatsapp.net"
        ]
    },
    grupo: "",
    closerListArr: ['55']
}

const path = './'
exports.connFileName = path + (this.testMode ? 'wabasemdConnectionTest.json' : 'wabasemdConnection.json')
