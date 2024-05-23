export default {
	downloadQrcode() {
		setTimeout(() => {
			if (QRCodeGenerator.model.url) {
				download(QRCodeGenerator.model.url, PokemonList.triggeredItem.name + ".png")
			} else {
				showAlert("Failed downloading QR Code, please try again.", "error")
			}
		}, 250)
	}
}