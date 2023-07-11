window.addEventListener('load', function () {
    var categorias = document.getElementById('categorias');
    var productos = document.querySelectorAll('#producto-seleccionado img');
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalInfo = document.getElementById('modal-info');
    var modalClose = document.getElementsByClassName('close')[0];

    categorias.addEventListener('click', function (event) {
        var categoria = event.target.getAttribute('data-categoria');

        
        if (categoria === 'todos') {
            productos.forEach(function (producto) {
                producto.style.display = 'block';
            });
        } else {
            productos.forEach(function (producto) {
                var categoriaProducto = producto.getAttribute('data-categoria');

                if (categoriaProducto === categoria) {
                    producto.style.display = 'block';
                } else {
                    producto.style.display = 'none';
                }
            });
        }

   
        var elementosCategorias = categorias.getElementsByTagName('li');
        for (var i = 0; i < elementosCategorias.length; i++) {
            elementosCategorias[i].classList.remove('active');
        }
        event.target.classList.add('active');
    });

    productos.forEach(function (producto) {
        producto.addEventListener('click', function () {
            var titulo = this.alt;
            var info = this.getAttribute('data-info');
            modalTitle.textContent = titulo;
            modalInfo.textContent = info;
            modal.style.display = 'block';
        });
    });
    
    

    modalClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });


    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

