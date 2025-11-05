// ========================================
// DATOS DE HERRAMIENTAS
// ========================================
const herramientasData = {
    'enzunchadora-automatica': {
        nombre: 'Enzunchadora Automática',
        descripcion: 'Enzunchadora automática de paquetes y pallets. Cuenta con un sistema de tensado regulable y corte automático, ideal para operaciones de alto volumen que requieren consistencia y rapidez en el proceso de embalaje.',
        colores: ['#1e3a8a'],
        video: 'videos/enzunchadora.mp4',
        caracteristicas: [
            "Tipo de equipo: Enzunchadora o flejadora eléctrica semiautomática (modelo V2)",
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
    'enzunchadora-manual': {
        nombre: 'Enzunchadora Manual',
        descripcion: 'Enzunchadora manual de productos. Herramienta portátil y versátil diseñada para el enzunchado de productos. Su diseño ergonómico permite operaciones flexibles y embalaje de productos de diferentes tamaños con máxima precisión, perfecta para trabajos que requieren movilidad.',
        colores: ['#4F55E3'],
        caracteristicas: [
            "Tipo de equipo: Enzunchadora manual (Tensor y sellador modelo H19/J19-C380)",
            "Grado de automatización: Manual",
            "Tipo de conducción: Manual",
            "Material de fleje compatible: PP y PET",
            "Ancho de fleje compatible: 13-19 mm, grosor de 0.5-1.0 mm",
            "Método de bloqueo: Hebilla de estaño",
            "Aplicaciones: Sectores de comida, bebida, mercancía, químico, maquinaria, ferretería, ropa, textiles y médico",
            "Componentes principales: Tensor y sellador",
            "Diseño portátil y liviano: Peso total aproximado de 2.98 kg (tensor 1.18 kg, sellador 1.8 kg)"
        ],
        especificaciones: [
            "Modelo: H19 y J19/C380",
            "Tamaño del tensor: 270 × 150 × 70 mm",
            "Tamaño del sellador: 500 × 140 × 40 mm",
            "Material de embalaje: Papel y cartones",
            "Dimensiones del paquete: 50.5 × 14 × 10 cm, peso bruto 3.3 kg"
        ]
    }
};

// ========================================
// FUNCIONES DE MODAL - DISPONIBLES GLOBALMENTE
// ========================================
function openInfoModal(herramientaId) {
    console.log('🔍 Intentando abrir modal:', herramientaId);
    
    const modal = document.getElementById('infoModal');
    const details = document.getElementById('modalDetails');
    const data = herramientasData[herramientaId];

    if (!modal) {
        console.error('❌ Modal no encontrado en el DOM');
        return;
    }

    if (!details) {
        console.error('❌ modalDetails no encontrado en el DOM');
        return;
    }

    if (!data) {
        console.error('❌ Datos no encontrados para:', herramientaId);
        return;
    }

    // Generar HTML de colores
    const colorsHTML = data.colores.map(color => 
        `<div class="color-swatch" style="background: ${color}" title="Color disponible"></div>`
    ).join('');

    // Generar HTML de características
    const caracteristicasHTML = data.caracteristicas.map(item =>
        `<li><i class="fas fa-check-circle"></i> ${item}</li>`
    ).join('');

    // Generar HTML de especificaciones
    const especificacionesHTML = data.especificaciones.map(item =>
        `<li><i class="fas fa-info-circle"></i> ${item}</li>`
    ).join('');

    // Generar HTML de video si existe
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

    // Actualizar contenido del modal
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

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal abierto correctamente:', herramientaId);
}

function closeInfoModal() {
    console.log('🔒 Cerrando modal...');
    
    const modal = document.getElementById('infoModal');
    if (!modal) {
        console.error('❌ Modal no encontrado');
        return;
    }

    // Pausar todos los videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ocultar modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    console.log('✅ Modal cerrado');
}

function closeInfoModalOnOutside(event) {
    if (event.target.id === 'infoModal') {
        closeInfoModal();
    }
}

// ========================================
// VALIDACIONES DE FORMULARIO
// ========================================
const validaciones = {
    nombre: (v) => {
        if (!v || v.length < 3) return 'El nombre debe tener al menos 3 caracteres';
        if (v.length > 50) return 'El nombre no puede exceder 50 caracteres';
        return '';
    },
    email: (v) => {
        if (!v || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Por favor ingresa un email válido';
        return '';
    },
    telefono: (v) => {
        if (!v || !/^9[0-9]{8}$/.test(v)) return 'El teléfono debe comenzar con 9 y tener 9 dígitos';
        return '';
    },
    empresa: (v) => {
        if (v && v.length > 50) return 'El nombre de empresa no puede exceder 50 caracteres';
        return '';
    },
    asunto: (v) => {
        if (!v || v.length < 5) return 'El asunto debe tener al menos 5 caracteres';
        if (v.length > 100) return 'El asunto no puede exceder 100 caracteres';
        return '';
    },
    mensaje: (v) => {
        if (!v || v.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
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

function limpiarErrores() {
    const inputs = ['nombre', 'email', 'telefono', 'empresa', 'asunto', 'mensaje'];
    inputs.forEach(inputId => mostrarError(inputId, ''));
}

// ========================================
// INICIALIZACIÓN DEL DOM
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando Indpack SAC...');

    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            duration: 800, 
            once: true,
            offset: 100
        });
        console.log('✓ AOS inicializado');
    }

    // Configuración de EmailJS
    const SERVICE_ID = "service_u7oisbl";
    const TEMPLATE_ID = "template_ar7ykfg";
    const PUBLIC_KEY = "8LwIYfgiDFrQh95SK";
    
    if (typeof emailjs !== 'undefined') {
        emailjs.init(PUBLIC_KEY);
        console.log('✓ EmailJS inicializado');
    } else {
        console.error('❌ EmailJS no está cargado');
    }

    // Event listener para cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Escape' || e.key === 'Esc') && 
            document.getElementById('infoModal')?.classList.contains('active')) {
            closeInfoModal();
        }
    });

    // Prevenir cierre al hacer clic dentro del contenido del modal
    const modalContent = document.querySelector('.info-modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => e.stopPropagation());
    }

    // Menú hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
        });
    });

    // ========================================
    // CONFIGURACIÓN DEL FORMULARIO
    // ========================================
    const formulario = document.getElementById('contactForm');
    if (!formulario) {
        console.warn('⚠️ Formulario de contacto no encontrado');
        return;
    }

    let formularioInicioTiempo = null;
    
    formulario.addEventListener('focus', () => {
        if (!formularioInicioTiempo) {
            formularioInicioTiempo = Date.now();
        }
    }, true);

    const inputs = {
        nombre: document.getElementById('nombre'),
        email: document.getElementById('email'),
        telefono: document.getElementById('telefono'),
        empresa: document.getElementById('empresa'),
        asunto: document.getElementById('asunto'),
        mensaje: document.getElementById('mensaje')
    };

    // Validación en tiempo real
    if (inputs.nombre) {
        inputs.nombre.addEventListener('blur', function() {
            const valor = this.value.trim();
            mostrarError('nombre', validaciones.nombre(valor));
        });
    }

    if (inputs.email) {
        inputs.email.addEventListener('blur', function() {
            const valor = this.value.trim();
            mostrarError('email', validaciones.email(valor));
        });
    }

    if (inputs.telefono) {
        inputs.telefono.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            
            if (this.value.length > 9) {
                this.value = this.value.slice(0, 9);
            }
            
            if (this.value.length > 0) {
                mostrarError('telefono', validaciones.telefono(this.value));
            }
        });
        
        inputs.telefono.addEventListener('blur', function() {
            if (this.value.length > 0) {
                mostrarError('telefono', validaciones.telefono(this.value));
            }
        });
    }

    if (inputs.empresa) {
        inputs.empresa.addEventListener('blur', function() {
            const valor = this.value.trim();
            mostrarError('empresa', validaciones.empresa(valor));
        });
    }

    if (inputs.asunto) {
        inputs.asunto.addEventListener('blur', function() {
            const valor = this.value.trim();
            mostrarError('asunto', validaciones.asunto(valor));
        });
    }

    if (inputs.mensaje) {
        inputs.mensaje.addEventListener('input', function() {
            const count = this.value.length;
            const countEl = document.getElementById('mensaje-count');
            if (countEl) {
                countEl.textContent = `${count}/500 caracteres`;
                if (count > 450) {
                    countEl.style.color = '#dc2626';
                } else if (count > 400) {
                    countEl.style.color = '#f59e0b';
                } else {
                    countEl.style.color = '#6b7280';
                }
            }
            
            if (count >= 10) {
                mostrarError('mensaje', validaciones.mensaje(this.value));
            }
        });
    }

    // Submit del formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('📤 Procesando envío del formulario...');

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
            console.warn('⚠️ Formulario con errores');
            return;
        }

        if (typeof grecaptcha === 'undefined') {
            mostrarMensaje('error', 'Error: reCAPTCHA no está cargado. Por favor recarga la página.');
            console.error('❌ grecaptcha no está definido');
            return;
        }

        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            mostrarMensaje('error', 'Por favor, completa el reCAPTCHA');
            console.warn('⚠️ reCAPTCHA no completado');
            return;
        }

        const tiempoLlenado = Date.now() - (formularioInicioTiempo || Date.now());
        if (tiempoLlenado < 3000) {
            console.warn('⚠️ Formulario llenado muy rápido:', tiempoLlenado, 'ms');
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

        console.log('📧 Enviando email...');
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(() => {
                console.log('✅ Email enviado exitosamente');
                mostrarMensaje('success', '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                
                formulario.reset();
                limpiarErrores();
                
                const countEl = document.getElementById('mensaje-count');
                if (countEl) {
                    countEl.textContent = '0/500 caracteres';
                    countEl.style.color = '#6b7280';
                }
                formularioInicioTiempo = null;
            })
            .catch((error) => {
                console.error('❌ Error al enviar email:', error);
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
            
            if (tipo === 'success') {
                setTimeout(() => {
                    formMessage.className = 'form-message';
                }, 5000);
            }
        }
    }

    console.log('✓ Indpack SAC inicializado correctamente');
});

// Exponer funciones globalmente para uso en onclick
window.openInfoModal = openInfoModal;
window.closeInfoModal = closeInfoModal;
window.closeInfoModalOnOutside = closeInfoModalOnOutside;