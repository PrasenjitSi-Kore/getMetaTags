const botDefinition = require('./botDefinition.json');
const { dialogComponents } = botDefinition;

const LINE_LENGTH = 112;

function displayCustomTags(dialogComponents) {
    const customTagRegex = /tags\.add(Message|Session|User)LevelTag\(\s*\S+,\s*\S+\s*\)/g;

    let count = 0;
    let str = '';
    let message = '\n\n';

    message += paddingTemplate('~~~~~  M  E  T  A  ', '  T  A  G  S  ~~~~~', true);

    let mnCount = 0;
    let enCount = 0;
    let snCount = 0;

    dialogComponents.forEach(component => {
        let script = ''; 
        if (component.type === 'script') {
            script = component.script;
        } else if (component.type === 'entity' || component.type === 'message') {
            let str = '';
            component.message.forEach(item => {
                str += ' ' + item.localeData.en.text;
            })
            script = str;
        }

        if (script) {
            script = decodeURIComponent(script);
            str += ' ' + script;
            const customTags = script.match(customTagRegex) || [];
            if (customTags.length) {
                message += '\n\n' + '='.repeat(LINE_LENGTH) + '\n';
                let nodeName = `Node Name:  ${component.name}`;
                let nodeType = `Node Type:  ${component.type}`;
                message += paddingTemplate(nodeName, nodeType);                
                if (customTags.length) {
                    message += '\n\nCustom Tags: \n';
                    customTags.forEach((tag, index) => {
                        message += '\n   ' + (index + 1) + '. ' + tag;
                        count++;
                    });
                }

                // Count Nodes
                if (component.type === 'script') {
                    snCount++;
                } else if (component.type === 'message') {
                    mnCount++;
                } else {
                    enCount++;
                }
            }
        }
    });
    message += '\n\n' + '='.repeat(LINE_LENGTH) + '\n\n';
    var totalTags = 'Total Tags: ' + count;
    var nodeCount = `M - ${mnCount}, E - ${enCount}, S - ${snCount}, Total Node - ${mnCount + enCount + snCount}`;

    message += paddingTemplate(totalTags, nodeCount) + '\n\n';

    return message;
}

function paddingTemplate(str1, str2, center = false) {

    const half = parseInt( LINE_LENGTH / 2 );
    if (center === false) {
        str1 = str1 + ' '.repeat(half - str1.length);
        str2 = ' '.repeat(half - str2.length) + str2;
    } else {
        str1 = ' '.repeat(half - str1.length) + str1;
        str2 = str2 + ' '.repeat(half - str2.length);
    }

    return str1 + str2;
}

function main() {
    try {
        // Call displayCustomTags function
        console.log(displayCustomTags(dialogComponents));
    } catch (err) {
        console.log(err);
    }
}

main();
