// ============================================
// DATOS DE HERRAMIENTAS
// ============================================
const herramientasData = {
    'ensunchadora-automatica': {
        nombre: 'Ensunchadora Automática',
        descripcion: 'Equipo de alta eficiencia diseñado para el enzunchado automático de paquetes y pallets. Cuenta con un sistema de tensado regulable y corte automático, ideal para operaciones de alto volumen que requieren consistencia y rapidez en el proceso de embalaje.',
        colores: ['#1e3a8a'],
        video: 'videos/ensunchadora.mp4',
        caracteristicas: [
            "Tipo de equipo: Ensunchadora o flejadora eléctrica semiautomática (modelo V2)",
            "Grado de automatización: Semiautomático",
            "Tipo de conducción: Eléctrica, alimentada por batería de 14.4 V",
            "Material de fleje compatible: PET (polietilentereftalato) y PP (polipropileno)",
            "Funciones principales: Tensión, soldadura y corte del fleje",
            "Configuración mediante pantalla LED para ajustar parámetros operativos (tensión, tiempo, etc.)",
            "Adecuada para flejar cajas, botellas, latas, cartones y mercancías en sectores como alimentos, bebidas, textiles, químicos y ferretería",
            "Tensión ajustable: De 400 N a 3200 N, adaptable al tipo de material y embalaje",
            "Velocidad de apriete: 14 cm/s, con tiempo de empalme regulable entre 0.5 y 3.5 s",
            "Peso de la máquina 3.35 kg, con dimensiones compactas 380 × 130 × 130 mm, ideal para uso manual en líneas de producción"
        ],
        especificaciones: [
            "Batería: 14.4 V, 4.0 Ah, 57.6 Wh, con tiempo de carga de 90 min",
            "Compatibilidad de fleje: Ancho 13–16 mm, grosor 0.4–1.2 mm",
            "Capacidad de trabajo: Hasta 300 flejes por carga",
            "Dimensiones de la máquina completa: 2745 × 1650 × 2863 mm (L×W×H)",
            "Componentes principales: PLC y motor eléctrico"
        ]
    },
    'ensunchadora-manual': {
        nombre: 'Ensunchadora Manual',
        descripcion: 'Herramienta portátil y versátil diseñada para el enzunchado manual de productos. Su diseño ergonómico permite operaciones flexibles y embalaje de productos de diferentes tamaños con máxima precisión, perfecta para trabajos que requieren movilidad.',
        colores: ['#10b981', '#059669', '#34d399'],
        video: 'videos/ensunchadora.mp4',
        caracteristicas: [
            'Diseño ergonómico y ligero (solo 2.5 kg)',
            'Tensión manual ajustable según necesidad',
            'Compatible con zuncho de 13-19mm de ancho',
            'Sistema de corte integrado',
            'Fácil mantenimiento sin herramientas especiales',
            'Construcción en acero inoxidable resistente'
        ],
        especificaciones: [
            'Material: Acero inoxidable AISI 304',
            'Tensión máxima: 40 kg',
            'Durabilidad: Alta resistencia al uso continuo',
            'Garantía: 1 año',
            'Manual de uso incluido'
        ]
    }
};

// ============================================
// MODAL DE INFORMACIÓN
// ============================================
function openInfoModal(herramientaId) {
    const modal = document.getElementById('infoModal');
    const details = document.getElementById('modalDetails');
    const data = herramientasData[herramientaId];

    if (!data || !modal || !details) return;

    const colorsHTML = data.colores.map(color => 
        `<div class="color-swatch" style="background: ${color}" title="Color disponible"></div>`
    ).join('');

    const caracteristicasHTML = data.caracteristicas.map(item =>
        `<li><i class="fas fa-check-circle"></i> ${item}</li>`
    ).join('');

    const especificacionesHTML = data.especificaciones.map(item =>
        `<li><i class="fas fa-info-circle"></i> ${item}</li>`
    ).join('');

    const videoHTML = data.video ? `
        <div class="video-section">
            <h4><i class="fas fa-play-circle"></i> Video Demostrativo</h4>
            <div class="video-container">
                <video controls preload="metadata">
                    <source src="${data.video}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </div>
    ` : '';

    details.innerHTML = `
        <h3>${data.nombre}</h3>
        
        <div class="modal-description">
            <p>${data.descripcion}</p>
        </div>
        
        <div class="detail-section">
            <h4><i class="fas fa-palette"></i> Colores Disponibles</h4>
            <div class="color-swatches">${colorsHTML}</div>
        </div>

        <div class="detail-section">
            <h4><i class="fas fa-star"></i> Características Principales</h4>
            <ul class="detail-list">${caracteristicasHTML}</ul>
        </div>

        <div class="detail-section">
            <h4><i class="fas fa-cog"></i> Especificaciones Técnicas</h4>
            <ul class="detail-list">${especificacionesHTML}</ul>
        </div>

        ${videoHTML}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('✓ Modal abierto:', herramientaId);
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;

    // Pausar todos los videos antes de cerrar
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeInfoModalOnOutside(event) {
    if (event.target.id === 'infoModal') closeInfoModal();
}

// ============================================
// SISTEMA DE VALIDACIÓN DE FORMULARIO
// ============================================
const validaciones = {
    nombre: (v) => {
        if (v.length < 3) return 'El nombre debe tener al menos 3 caracteres';
        if (v.length > 50) return 'El nombre no puede exceder 50 caracteres';
        return '';
    },
    email: (v) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Por favor ingresa un email válido';
        return '';
    },
    telefono: (v) => {
        if (!/^9[0-9]{8}$/.test(v)) return 'El teléfono debe comenzar con 9 y tener 9 dígitos';
        return '';
    },
    empresa: (v) => {
        if (v && v.length > 50) return 'El nombre de empresa no puede exceder 50 caracteres';
        return '';
    },
    asunto: (v) => {
        if (v.length < 5) return 'El asunto debe tener al menos 5 caracteres';
        if (v.length > 100) return 'El asunto no puede exceder 100 caracteres';
        return '';
    },
    mensaje: (v) => {
        if (v.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (v.length > 500) return 'El mensaje no puede exceder 500 caracteres';
        return '';
    }
};

function mostrarError(inputId, mensaje) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(inputId + '-error');
    
    if (!input || !errorSpan) return;
    
    if (mensaje) {
        input.classList.add('error');
        errorSpan.textContent = mensaje;
        errorSpan.classList.add('show');
    } else {
        input.classList.remove('error');
        errorSpan.classList.remove('show');
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({ duration: 800, once: true });

    // Inicializar EmailJS
    const SERVICE_ID = "service_u7oisbl";
    const TEMPLATE_ID = "template_ar7ykfg";
    const PUBLIC_KEY = "8LwIYfgiDFrQh95SK";
    
    emailjs.init(PUBLIC_KEY);

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Escape' || e.key === 'Esc') && document.getElementById('infoModal')?.classList.contains('active')) {
            closeInfoModal();
        }
    });

    // Prevenir cierre al hacer clic en contenido del modal
    const modalContent = document.querySelector('.info-modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => e.stopPropagation());
    }

    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => navMenu?.classList.toggle('active'));
    }

    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu?.classList.remove('active'));
    });

    // Navbar scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // Formulario
    const formulario = document.getElementById('contactForm');
    if (!formulario) return;

    let formularioInicioTiempo = null;
    formulario.addEventListener('focus', () => {
        if (!formularioInicioTiempo) formularioInicioTiempo = Date.now();
    }, true);

    // Validación en tiempo real
    const inputs = {
        nombre: document.getElementById('nombre'),
        email: document.getElementById('email'),
        telefono: document.getElementById('telefono'),
        empresa: document.getElementById('empresa'),
        asunto: document.getElementById('asunto'),
        mensaje: document.getElementById('mensaje')
    };

    if (inputs.nombre) {
        inputs.nombre.addEventListener('blur', function() {
            mostrarError('nombre', validaciones.nombre(this.value));
        });
    }

    if (inputs.email) {
        inputs.email.addEventListener('blur', function() {
            mostrarError('email', validaciones.email(this.value));
        });
    }

    if (inputs.telefono) {
        inputs.telefono.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 0) {
                mostrarError('telefono', validaciones.telefono(this.value));
            }
        });
    }

    if (inputs.empresa) {
        inputs.empresa.addEventListener('blur', function() {
            mostrarError('empresa', validaciones.empresa(this.value));
        });
    }

    if (inputs.asunto) {
        inputs.asunto.addEventListener('blur', function() {
            mostrarError('asunto', validaciones.asunto(this.value));
        });
    }

    if (inputs.mensaje) {
        inputs.mensaje.addEventListener('input', function() {
            const count = this.value.length;
            const countEl = document.getElementById('mensaje-count');
            if (countEl) countEl.textContent = count + '/500 caracteres';
            if (count >= 10) {
                mostrarError('mensaje', validaciones.mensaje(this.value));
            }
        });
    }

    // Envío del formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const valores = {
            nombre: inputs.nombre?.value.trim() || '',
            email: inputs.email?.value.trim() || '',
            telefono: inputs.telefono?.value.trim() || '',
            empresa: inputs.empresa?.value.trim() || '',
            asunto: inputs.asunto?.value.trim() || '',
            mensaje: inputs.mensaje?.value.trim() || ''
        };

        const errores = {
            nombre: validaciones.nombre(valores.nombre),
            email: validaciones.email(valores.email),
            telefono: validaciones.telefono(valores.telefono),
            empresa: validaciones.empresa(valores.empresa),
            asunto: validaciones.asunto(valores.asunto),
            mensaje: validaciones.mensaje(valores.mensaje)
        };

        Object.keys(errores).forEach(key => mostrarError(key, errores[key]));

        const hayErrores = Object.values(errores).some(e => e !== '');
        if (hayErrores) {
            mostrarMensaje('error', 'Por favor corrige los errores en el formulario');
            return;
        }

        // Validar reCAPTCHA
        if (typeof grecaptcha === 'undefined') {
            mostrarMensaje('error', 'Error: reCAPTCHA no está cargado');
            return;
        }

        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            mostrarMensaje('error', 'Por favor, completa el reCAPTCHA');
            return;
        }

        const tiempoLlenado = Date.now() - (formularioInicioTiempo || Date.now());
        if (tiempoLlenado < 3000) {
            console.warn('Formulario llenado muy rápido:', tiempoLlenado, 'ms');
        }

        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';
        }

        mostrarMensaje('info', 'Enviando tu mensaje...');

        const templateParams = {
            nombre: valores.nombre,
            from_name: valores.nombre,
            email: valores.email,
            telefono: valores.telefono,
            empresa: valores.empresa || 'No especificada',
            asunto: valores.asunto,
            mensaje: valores.mensaje
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(() => {
                mostrarMensaje('success', '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                formulario.reset();
                const countEl = document.getElementById('mensaje-count');
                if (countEl) countEl.textContent = '0/500 caracteres';
            })
            .catch((error) => {
                console.error('Error al enviar:', error);
                const errorMsg = error.text || error.message || 'Error al enviar el mensaje. Por favor verifica tu conexión e intenta nuevamente.';
                mostrarMensaje('error', errorMsg);
            })
            .finally(() => {
                if (typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset();
                }
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
                    }
                }, 3000);
            });
    });

    function mostrarMensaje(tipo, texto) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.className = `form-message ${tipo}`;
            formMessage.textContent = texto;
        }
    }

    console.log('✓ Indpack SAC inicializado correctamente');
});

// Exportar funciones globales
window.openInfoModal = openInfoModal;
window.closeInfoModal = closeInfoModal;
window.closeInfoModalOnOutside = closeInfoModalOnOutside;