/**
 * @File:      LG脚手架logo
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-14 11:30:24
 */
var chalk = require('chalk');
function Logo(contex) {
    var version = '';
    try{
        version = contex ? 'v' + contex.pkg.version : '';
    }
    catch (e) {}
    var logo = '\n'
        +    chalk.red(' \\\\ / /      //____) )\n')
        +    chalk.yellow('  \\  /     //\n')
        +    chalk.magenta('  / /     //\n')
        +    chalk.blue(' / /\\\\   //\n')
        +    chalk.yellow('/ /  \\\\ ((____/ / \n') + '    ' + version + '\n\n';

    logo += ('need help?') + chalk.magenta('  ===>  ') + chalk.green('yo xc:h') + '\n';

    if (contex) {
        logo += '\nCMD: '+ chalk.green(contex.rootGeneratorName()) + '\n';
    }

    return logo;
};

exports.Logo = Logo;
