# SECTIONS

    ## OBJETOS INDEPENDIENTES
        ### BUTTON-MINT-1 (right-top)
        ### BUTTON-DISCORD (bottom-left)
        ### BUTTON-OPENSEA (bottom-right)
        ### BUTTON-TOP-SCROLL (bottom-right-right)
    ## INIT
        ### NAVBAR (sticky mode )
            #### LOGO
            #### RRSS
            #### BUTTON-MINT-1
        ### JUMBOTROM
            #### hero-image
            #### hero-card
                ##### text-herocard
                ##### buttons-herocard
                        ###### button-opensea-2 ?
                        ###### button-mint-2 ?
            #### hero-video
            #### BUTTON-DISCORD
            #### BUTTON-OPENSEA
            #### BUTTON-TOP-SCROLL

    ## ABOUT
    ## START
    ## NOTICES
    ## ROADMAP
    ## TEAM
    ## FAQS
    ## FOOTER

# Sever-Droplet-Information

`ip` 134.209.93.167
`name` vps-server-supremenft

#####################################################################################

## Access ssh, access idrsa_key.pub // ssh root@134.209.93.167

################## > ssh root@134.209.93.167
################## > _JUMALUBL_$27091971$.gotth3way.#12481632#

    ## update system
    > sudo apt update
    > sudo apt upgrade

#####################################################################################

## install nvm

##################################################################################### > sudo apt install curl > curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash > source ~/.profile

#####################################################################################

## install node with nvm (both: local & server)

#####################################################################################
] nvm install node // v16.14.0 actually 20220207
] nvm install 16.14.0 // version in my pc
] nvm ls
] nvm ls-remote
] nvm use 16.14.0 // LTS version

#####################################################################################

## git configuration local

##################################################################################### > git init -y // inicializa git y abre el package.json > touch .gitignore > echo "node_modules" >> .gitignore

#####################################################################################

## after coding some project and creating aproject in bitbucket

##################################################################################### > git status > git add ./ > git commit -m "JuanLuna@master: first commit" > git push origin master

#####################################################################################

## create user with root permission and folder for webs

#####################################################################################
$ sudo adduser -u 0 -o -g 0 crypto
$ sudo passwd _JUMALUBL_$27091971$.crypto.#12481632#
$ mkdir /var/www/supremenft -p
$ cd /var/www/supremenft

    $ sudo chown -R $USER:$USER /var/www/      // el nuevo propietario sería root
    $ chmod -R 755 /var/www/supremenft

    $ ls -la /var/www
        // output
        # drwx-xr-x root root ... supremenft

#####################################################################################

## git configuracion server |

#####################################################################################
$ git config --global user.name "gotht3way"
$ git config --global user.email gotth3way.apis@gmail.com
$ git config --list
$ git init
$ git remote add origin https://gotth3way@bitbucket.org/nftsupreme/nftsupreme_onlyweb.git
$ git pull origin master

        ssh root@134.209.93.167
        cd /var/www/supreme_nft.com
        git pull origin master
        git user gotth3way password:            _JUMALUBL_$27091971$.gotth3way.#12481632#

        http://134.209.93.167:5000

#####################################################################################
################## > ssh root@134.209.93.167
################## > _JUMALUBL_$27091971$.gotth3way.#12481632#

## git configuration server ssh

-- inside server with root or user with root privileges --

> ssh -v // comprobar si tienes ssh instalado
> ssh-keygen // generar clave publica y privada
> ls -la ~/.ssh // ver el directorio y los ficheros generados id_rsa id_rsa.pub
> eval $(ssh-agent) // obtener el pid del user agent
> ssh-add ~/.ssh/<pid-user-agent> // add the private key file to the user agent
> cat ~/.ssh/id_rsa.pub | pbcopy // obtener el contenido del fichero id_rsa.pub y copiarlo

-- inside repository in bitbucket --
---# acceder al siguiente menú: /Personal settings/SSH keys/Add key
---# enter a label for the new key: 'web_vps_key'
---# paste the copied public key into the ssh key field
---# click save

-- return comand line

> ssh -T git@bitbucket.org // comprobar si esta configurado

#####################################################################################

## install node modules

#####################################################################################
$ npm install -g npm@8.3.1 // si instalas node@17.4.0 ya va incluida
$ npm install
$ pwd // /var/www/supremenft cambiar a /var/www/supreme_nft.com con > mv supremenft supreme_nft.com
$ node ./src/server.js // probar si funciona el servidor dirijete a 134.209.93.167:5000
$ npm run nodeDev // es lo mismo

    go to web-navigator and put: http://134.209.93.167:5000/

#####################################################################################

## pm2

#####################################################################################
$ npm install -g pm2
$ pm2 start ./src/server.js dirijete a http://134.209.93.167:5000/
$ pm2 list
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
#####################################################################################

ssh root@134.209.93.167
#########################################################################################

### CONFIGURATION DIGITAL OCEAN AND NGINX NAMECHEAP

#########################################################################################
dominio lws: LWS-497580
password: p7w7d7z7d5Z5

### data dns namecheap received:

ns17.lwsdns.com
ns18.lwsdns.com
ns19.lwsdns.com
ns20.lwsdns.com

### update data in namecheap to

ns1.digitalocean.nom
ns2.digitalocean.nom
ns3.digitalocean.com

#########################################
// ### DIGITAL OCEAN ################################################################
// CNAME blog.supreme-nft.com supreme-nft.com 43200 // para alias y subdominos
// A supreme-nft.com 134.209.93.167 3600 // corresponde a las ips
// A www.supreme-nft.com 134.209.93.167 3600
// A blog.supreme-nft.com 134.209.93.167 3600
// NS supreme-nft.com ns1.digitalocean.com 1800 // que servidor proporciona el dns
// NS supreme-nft.com ns2.digitalocean.com 1800
// NS supreme-nft.com ns3.digitalocean.com 1800
// ### DIGITAL OCEAN ################################################################

#####################################################################################

## UFW FIREWORK

#####################################################################################
$ ufw status
$ ufw enable // solo falta este
$ ufw app list
Nginx Full
Nginx HTTP
Nginx HTTPS
OpenSSH
$ ufw allow ssh
$ ufw allow http
$ ufw allow https

    $ ufw reload
    $ ufw status
    $ ufw disable       // pararlo cuando haga falta

#####################################################################################

## NGINX WITHOUT SSL CERTIFICATE

#####################################################################################
$ sudo apt install nginx // instalado ver la configuracion por defecto y el documento en /etc/nginx/nginx.conf

    $ cd /etc/nginx/sites-available
    $ touch supreme-nft.com
    $ mkdir /var/log/nginx/supreme-nft.com
    $ touch /var/log/nginx/supreme-nft.com/access.log
    $ touch /var/log/nginx/supreme-nft.com/error.log
    $ nano /etc/nginx/sites-available/supreme-nft.com
    $ cd /etc/nginx/sites-enabled/                  // solo enlaces
    $ rm /etc/nginx/sites-enabled/default           // quitar el enlace recomendado o mv default default.backup, beacraefulle hay un enlace mirando aquí
    // FILE ##### -------------- supreme-nft.com --------------

server {
listen 80;
listen [::]:80;
#server_name localhost;
server_name supreme-nft.com www.supreme-nft.com;

        access_log   /var/log/nginx/supreme-nft.com/access.log;
        error_log    /var/log/nginx/supreme-nft.com/error.log;

        location / {
                # needed
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;

                # prevent click jacking attacks
                proxy_hide_header X-Powered-By;
                add_header X-Frame-Options SAMEORIGIN;



                # redirect
                proxy_pass http://127.0.0.1:5000;
                #proxy_redirect off;

                # others
                #proxy_http_version 1.1;
                #proxy_set_header Upgrade $http_upgrade;
                #proxy_set_header Connection 'upgrade';
                #proxy_set_header X-Nginx-Proxy true;
                #proxy_set_header Host $host;
                #proxy_cache_bypass $http_upgrade;

        }

}
// FILE ##### -------------- supreme-nft.com --------------

    $ nginx -t  // comprueba si la configuración creada es correcta o tiene erores
    $ ln -s /etc/nginx/sites-available/supreme-nft.com /etc/nginx/sites-enabled/supreme-nft.com
    $ nginx -t
    $ systemctl start nginx         // inicia el servicio
    $ systemctl status nginx        // da informacion del estado del servcio
    $ systemctl restart nginx       // resetea el servicio
    $ systemctl reload nginx        // solo revarga la info nueva
    // NGINX WITHOUT SSL CERTIFICATE ####################################################


    // CONFIG HOSTS #####################################################################
    $ sudo nano /etc/hosts
    // FILE ##### ------------- /etc/hosts -------------------
    134.209.93.167 supreme-nft.com
    134.209.93.167 www.supreme-nft.com
    127.0.0.1 localhost
    127.0.0.1 root
    // FILE ##### ------------- /etc/hosts -------------------
    // CONFIG HOSTS #####################################################################



    // LET `S ENCRYPT CERTIFICATE #######################################################
    $ apt-get update
    $ apt-get install software-properties-common
    $ add-apt-repository universe
    $ add-apt-repository ppa:certbot/certbot
    $ apt-get update

    $ apt install certbot python3-certbot-nginx
    $ certbot --nginx -d supreme-nft.com -d www.supreme-nft.com

    # // select option (2) when ask you for redirect //

    $ sudo systemctl status certbot.timer // estado del temporizador de renovado el propio certbot se encarga de renovarlo dos veces aldía además de renovar cada 30 días antes de cumplir.

    $ certbot renew --dry-run // comprobar si se renueva pero sin hacerlo


    --------------------------------------------------- // NOT REALIZED JET
    $ sudo snap install core
    $ sudo snap refresh core                            // install snap
    $ sudo apt-get remove certbot                       // remove certbot antiguo
    $ sudo snap install --classic certbot               // instala el nuevo certbot
    $ sudo ln -s /snap/bin/certbot /usr/bin/certbot     // crea un enlace duro
    --------------------------------------------------- // debes tener un dominio configurado previamente
                                                        // antes de seguir con la instalación
    $ sudo certbot --nginx                              // automatic configuration
    $ sudo certbot renew --dry-run                      // test renewal
    --------------------------------------------------- // NOT REALIZED JET

    #####################################################################################

    // revocar certificado de certbot
    $ certbot revoke --cert-path /etc/letsencrypt/archive/${YOUR_DOMAIN}/cert1.pem    // ${YOUR_DOMAIN} --> supreme-nft.com
    // LET `S ENCRYPT CERTIFICATE #######################################################

    // NGINX CONFIGURATION WITH SSL CERTIFICATE #########################################
    $ nano /etc/nginx/sites-available/supreme-nft.com

    // FILE ##### -------------- supreme-nft.com --------------

    // copiar este contenido borrar el otro, no sin antes hacer uan copia de seguridad y verterlo dentro sali grabando

server {

    listen 80;
    listen [::]:80;

    server_name supreme-nft.com www.supreme-nft.com;

    if ($host = www.supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot

}

server {

    # ssl certificate

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot

    ssl on;
    ssl_certificate /etc/letsencrypt/live/supreme-nft.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/supreme-nft.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    server_name supreme-nft.com www.supreme-nft.com;

    access_log   /var/log/nginx/supreme-nft.com/access.log;
    error_log    /var/log/nginx/supreme-nft.com/error.log;


    location / {
            ## needed
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            ## prevent click jacking attacks
            proxy_hide_header X-Powered-By;
            add_header X-Frame-Options SAMEORIGIN;

            ## redirect
            proxy_pass http://127.0.0.1:5000;
            #proxy_redirect off;

            ## others
            #proxy_http_version 1.1;
            #proxy_set_header Upgrade $http_upgrade;
            #proxy_set_header Connection 'upgrade';
            #proxy_set_header X-Nginx-Proxy true;
            #proxy_set_header Host $host;
            #proxy_cache_bypass $http_upgrade;

    }

}
// FILE ##### -------------- supreme-nft.com --------------
// NGINX CONFIGURATION WITH SSL CERTIFICATE #########################################
// SERVICES PROBLEMS ################################################################
// ##### nginx process #####
$ systemctl restart nginx // ERROR CODE: Failed to start A high performance web server and a reverse proxy server.
// REASON # apache or other is running in this port 443/tcp or 80/tcp > root@SERVER-CHRONOTOKEN:~# fuser -k 443/tcp > 443/tcp: 1615 1616 // there are two process using this port

    // SOLUTION
    > kill -2 1615
    > kill -2 1616
    > systemctl start nginx
    > systemctl status nginx
    > fuser -k 443/tcp

    // ##### nginx process #####
    // SERVICES PROBLEMS ################################################################

------------------------------ VAMOS POR AQUÍ ------------------- ssh root@134.209.93.167

    // RELEASES FROM GIT ################################################################
    $ ssh root@134.209.93.167
    $ cd /var/www/supreme-nft.com/
    $ git status
    $ git pull origin master // _JUMALUBL_$27091971$.gotth3way.#12481632#

    see
    http://134.209.93.167 or http://134.209.93.167:5000
    http://supreme-nft.com or http://www.supreme-nft.com
    https://supreme-nft.com or https://www.supreme-nft.com

    $ curl http://134.209.93.167
    $ curl http://134.209.93.167:5000
    $ curl http://supreme-nft.com
    $ curl http://www.supreme-nft.com
    $ curl https://supreme-nft.com
    $ curl https://www.supreme-nft.com

    $ tail /var/log/nginx/supreme-nft.com/access.log
    $ tail /var/log/nginx/supreme-nft.com/error.log
    // RELEASES FROM GIT ################################################################

### fonts

> cp /var/www/supreme_nft.com/src/public/assets/tipography/PUBLICPIXEL.ttf /usr/share/local/fonts
> apt install fontconfig
> fc-cache -f -v
> cd /var/www/supreme_nft.com/src/public/assets/tipography/
> chmod 755 PUBLICPIXEL.ttf // no se si esto será bueno

### VPS DIGITAL OCEAN CONFIGURATION EMAIL DNS

emails
email1: salah@supreme-nft.com
password: salah@supreme-nft.com

---

email2: contact@supreme-nft.com
password: contact@supreme-nft.com

---

email3: marketing@supreme-nft.com
apssword: marketing@supreme-nft.com

Hostname Record Type Priority Value
@ MX 10 mx1.privateemail.com
@ MX 10 mx2.privateemail.com
@ TXT v=spf1 include:spf.privateemail.com ~all

############################################################

############################################################

# SUBDOMINE IN THE SAME SERVER

ssh root@134.209.93.167 (supreme-nft server)
ssh root@134.209.80.9 (battlerap)
al finalizar la configuracion en el supreme-nft server,
borraremos el servidor battlerap o lo dejamos para pruebas

############################################################

############################################################

# OPTION 2: CONFIGURE PAGE battlerap.com LIKE A SUBDOMINE OF supreme-nft.com

supreme-nft --> port 5000 http://134.209.93.167:5000
battlerap --> port 5001 http://134.209.93.167:5001

https://supreme-nft.com https://www.supreme-nft.com
https://battlerap.supreme-nft.com https://www.battlerap.supreme-nft.com

############################################################
############################################################

# LETS GO SERVER 1: supreme_vps_server

> ssh root@134.209.93.167

> cd /var/www
> mkdir battlerap.com
> cd battlerap.com
> git --list
> // user.name=gotht3way
> // user.email=gotth3way.apis@gmail.com

> cat ~/.ssh/id_rsa.pub
> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDOaLV+T7YgJRa+0Nxn8tMcpISIb5+OZNNw4KGja ....
> // copiar la clave al portapapeles

## in bitbucket repository of battlerap.com

add key ssh: key_vps_supreme
// pegar la clave aquí

## retornar al server de supremenft

> git init
> git remote add origin git@bitbucket.org:nftsupreme/supreme_battlerap.git
> git pull origin master

// ya tenemos la pagina en local

## configurar nginx para el subdominio

> ls -la /etc/nginx/sites-available
> touch /var/log/nginx/battlerap.com/access.log
> touch /var/log/nginx/battlerap.com/error.log

> sudo nano /etc/nginx/sites-available/supreme-nft.com
> // contenido del archivo añadir esto
> ...
> ---------------------------------------------------------- archivo ----------------
> server {

    listen 80;
    listen [::]:80;

    server_name supreme-nft.com www.supreme-nft.com;

    if ($host = www.supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot
    # added to battlerap
    if ($host = www.battlerap.supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = battlerap.supreme-nft.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot

}

    #  añadido para battlerap.supreme-nft.com

server {
listen 80; # ssl certificate

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/battlerap.supreme-nft.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/battlerap.supreme-nft.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


    server_name battlerap.supreme-nft.com www.battlerap.supreme-nft.com;

    access_log /var/log/nginx/battlerap.com/access.log;
    error_log /var/log/nginx/battlerap.com/error.log;

    location / {
        ## needed
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;

        ## prevent click jacking attacks
        proxy_hide_header X-Powered-By;
        add_header X-Frame-Options SAMEORIGIN;

        ## redirect
        proxy_pass http://127.0.0.1:5001;
        #proxy_redirect off;

    }

}
---------------------------------------------------------- archivo -----------------------------

---------------------------------------------------------- archivo -----------------------------

> nginx -t
> certbot --nginx -d battlerap.supreme-nft.com
> systemctl restart nginx
> systemctl reload nginx
