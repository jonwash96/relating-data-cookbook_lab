const modalController = {
    target: document.getElementById(modalConfig?.targetId || null),
    actionBtn: document.querySelector('dialog btn-block button[type=submit]'),
    btn2: document.querySelector('dialog btn-block button[type=button]') || null,
    message(message) {
        const el = document.getElementById('modal-message')
        el.classList.remove('hide');
        el.textContent = message;
    },
    count:0,
    listen() { this.actionBtn.addEventListener('click', this.action);
                this.btn2?.addEventListener('click', this.action) },
    action(e) {e.target===this.actionBtn ? function1(e) : function2(e); this.close()},
    function1(e) {this.target.close()},
    function2(e) {this.target.close()},
    close() {this.count = 0; this.target.close()},
    show() {this.target.showModal()},

    deleteIngredient() {
        e.preventDefault();
        this.count++;
        if (this.count>=2) {
            const ingredientId = window.location.href.match(/(?<=ents\/).+(?=\/edit)/g);
            fetch(`/ingredients/${ingredientId}`, {method:'DELETE'})
                .then(res => { if (res.status=='204') {
                    let count = 3;
                    modalController.actionBtn.classList = 'disabled';
                    modalController.btn2.textContent = "Done";
                    setInterval(() => {
                        modalController.message(`Item successfully Deleted. Redirecting in ${count} seconds. . .`);
                        count--;
                        if (count===0) {window.location.href = window.location.origin+'/ingredients'}
                    }, 1000)
                    } else {
                        modalController.message("An internal server error has occured. Please try again later. Press 'esc' to exit.");
                    }
                })
        } else if (count===1) {
            modalController.message("Are you sure you want to Delete this ingreetient? Press again to confirm.");
        } else {
            modalController.message("An unknown error has occured. Please try again later. Press 'esc' to exit.");
        }
    }
};

modalConfig.showOnPageLoad !== false && modalController.show();
modalConfig.function1 && (modalController.function1 = modalConfig.function1)
modalConfig.function1 && (modalController.function2 = modalConfig.function2)

modalController.function1.bind(modalController);
modalController.function2.bind(modalController);
modalController.deleteIngredient.bind(modalController);

module.exports = modalController;

