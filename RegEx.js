function solve(input) {
    
    let passTotal = Number(input.shift())

    
    for (let i = 0; i < passTotal; i++) {
        let filter = /(\w+|\W+)>(?<first>[0-9]{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<forth>[^<>]{3})<\1/gm   // Niki.RegEx()
        let txt = filter.exec(input[i])
        if (txt) {
            console.log(`Password: ` +txt[2] +txt[3] +txt[4] +txt[5])
        }
        else{
            console.log(`Try another password!`)
        }
    }
}
solve([ '5',
'aa>111|mqu|BAU|mqu<aa',
'()>111!aaa!AAA!^&*<()',
'o>088|abc|AAA|***<o',
'asd>asd|asd|ASD|asd<asd',
'*>088|zzzz|ZzZ|123<*' ])