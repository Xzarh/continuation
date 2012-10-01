var a, err;
(function (cont) {
    try {
        a = 1;
        err = 'some-error';
        setTimeout(function () {
            try {
                JSON.parse('invalid-json');
                if (err) {
                    throw err;
                }
                a = 2;
                cont();
            } catch (err) {
                cont(err);
            }
        }, 200);
    } catch (err) {
        cont(err);
    }
}(function (err) {
    if (err !== undefined) {
        console.log(err);
    }
    console.log('Done');
}));