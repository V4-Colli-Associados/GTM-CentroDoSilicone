function showpop() {
    document.getElementsByClassName("popupContainer")[0].style.display = "block";
  }
    
  function hidepopup() {
    document.getElementsByClassName("popupContainer")[0].style.display = "none";
  }
    
  function addWPdiv(
    class_name,
    post_url,
    phone_number,
    wp_message,
    url_img,
    nome_empresa
  ) {
    const btns = document.querySelectorAll(`.${class_name}`).forEach((btn) => {
      btn.setAttribute("onclick", "showpop()");
    });
    
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
    // ... give time for script to load, then type (or see below for non wait option)
    jQuery.noConflict();
    
      const urlParams = new URLSearchParams(window.location.search);
      const utm_source = urlParams.get("utm_source");
      const utm_medium = urlParams.get("utm_medium");
      const utm_campaign = urlParams.get("utm_campaign");
      const utm_term = urlParams.get("utm_term");
      const utm_content = urlParams.get("utm_content");
    
      const htmlContent = `
        <div class="popupContainer">
        <div class="headerpopup">
          <img
            src="${url_img}"
            alt="4all"
          />
          <div class="nomeEmpresa">
            <strong> ${nome_empresa}</strong>
            <div class="online">Online</div>
          </div>
          <div class="closepopup" onclick="hidepopup()">
            <img id="closeupopup"src="https://img.icons8.com/ios/50/000000/circled-x.png" />
          </div>
        </div>
        <div class="bodypopup">
          <div class="mensagem">
            <span class="pMensagem">
              Olá, preencha os campos abaixo para entrar<br/> em contato com nosso time via Whatsapp!
            </span>
          </div>
          <form id="whatsapp_form" action="${post_url}">
            <div class="inputspopup">
              <input required type="text" name="nome" placeholder="*Nome completo" />
              <input required name='btn_celular_whatsapp' onkeypress="mask(this, mphone);" onfocusout="mask(this, mphone);" type="tel" name="telefone" placeholder="DDD + Número de telefone"   />
              <input required type="email" name="email" placeholder="E-mail" />
              <input type="hidden" name="utm_source" value="${utm_source}" />
              <input type="hidden" name="utm_medium" value="${utm_medium}" />
              <input type="hidden" name="utm_campaign" value="${utm_campaign}" />
              <input type="hidden" name="utm_term" value="${utm_term}" />
              <input type="hidden" name="utm_content" value="${utm_content}" />
                
    
              
            </div>
            <div class="inputCheck">
              <input  type="checkbox" name="check" />
              <label for="check">&nbsp;Concordo em receber ofertas e notícias.</label>
          </div>
            <button id="enviar"  type="submit">Enviar</button>
    
        </form>
    
    
      </div>
    `;
    
      var popup = document.createElement("div");
      popup.innerHTML = htmlContent;
      document.body.appendChild(popup);
    
      document
        .getElementById("whatsapp_form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          data = {};
          $("form#whatsapp_form input").each((i, input) => {
            data[input.name] = input.value;
          });
          $.post(post_url, data).done(
            () =>
              (window.location.href = `https://api.whatsapp.com/send?phone=${phone_number}&text=${wp_message}`)
          );
        });
        
  }

  function formatWhatsApp(){
    const botao = document.getElementById('enviar');
    const field = document.getElementById("btn_celular_whatsapp");


    if(document.getElementsByName("btn_celular_whatsapp").value == ''){
        botao.disabled = true;
    }

    function mask(o, f) {
        setTimeout(function() {
            var v = mphone(o.value);
            if (v != o.value) {
                o.value = v;
            }
        }, 1);
    }

    function mphone(v) {
        var r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if(r.length == 11){
            if(verificarTerceiroDigito(v)!= false && validarNum() != false){
                console.log("aeeeee CARAI")
                botao.disabled = false;
                field.style.border = "";
            }else{
                field.focus();
                field.style.border = "red 2px solid";
                field.placeholder = "DDD ou número inválido";
                botao.disabled = true;
            }
        }
        if (r.length > 10) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
            // Teste
        } else if (r.length > 5) {
            r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
                r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2 ");
        }return r;}

    function verificarTerceiroDigito(numero) {
        const digito = numero.replace(/\D/g, '').substring(2, 3);
        return digito === '9';
    }

    function validarNum() {
        
        let num = field.value;
        num = num.split(' ');
        let ddd = parseInt(num[0].replace(/\D/g, ""));

        if (ddd != 11 && ddd != 12 && ddd != 13 && ddd != 14 && ddd != 15 && ddd != 16 && ddd != 17 && ddd != 18 && ddd != 19 && ddd != 21 && ddd != 22 && ddd != 24 && ddd != 27 && ddd != 28 && ddd != 31 && ddd != 32 && ddd != 33 && ddd != 34 && ddd != 35 && ddd != 37 && ddd != 38 && ddd != 41 && ddd != 42 && ddd != 43 && ddd != 44 && ddd != 45 && ddd != 46 && ddd != 47 && ddd != 48 && ddd != 49 && ddd != 51 && ddd != 53 && ddd != 54 && ddd != 55 && ddd != 61 && ddd != 62 && ddd != 63 && ddd != 64 && ddd != 65 && ddd != 66 && ddd != 67 && ddd != 68 && ddd != 69 && ddd != 71 && ddd != 73 && ddd != 74 && ddd != 75 && ddd != 77 && ddd != 79 && ddd != 81 && ddd != 82 && ddd != 83 && ddd != 84 && ddd != 85 && ddd != 86 && ddd != 87 && ddd != 88 && ddd != 89 && ddd != 91 && ddd != 92 && ddd != 93 && ddd != 94 && ddd != 95 && ddd != 96 && ddd != 97 && ddd != 98 && ddd != 99) {
            console.log("DDD is not a valid")
            return false;

        }else if(num[1] == '99999-9999'){ 
            console.log('number not is a valid')
            
            return false;
        }else{
            return true;
        }
    }   
  }
  addWPdiv(
    "btn-whatsapp", // Classe do botão//
    "https://hooks.zapier.com/hooks/catch/10132939/357hhw9/", // URL do post//
    "5562995359531", // Número do whatsapp//
    "Olá, gostaria de um orçamento!", // Mensagem padrão que sera mandada no whatsapp//
    "https://centrodosilicone.com.br/wp-content/uploads/2023/08/logo-centro-silicone-branca.svg", // URL da imagem que sera a foto do perfil do whatsapp//
    "Centro do Silicone" // Nome da empresa//
  );
  console.log("GitHub ativo")