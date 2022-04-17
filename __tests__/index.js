
const {sum,diff} = require('../index.js');

describe( "test case inside __tests__ for sum function", function(){

    test('sum function is defined',()=>{
        expect(sum).toBeDefined();
    });
    test('sum 1,2 = 3',()=>{
        expect(sum(1,2)).toBe(3);
    });

    test("diff is defined",()=>{
        expect(diff).toBeDefined();
    })

    test("diff of 1,2 = -1",()=>{
        expect(diff(1,2)).toBe(-1)
    })
})

describe("toBe tests", ()=>{

    test("toBe Number", ()=>{
        // === or triple equal to
        expect(10).toBe(10)
        // // boolean
        // expect(false).toBe(false);
        // // objects
        // // expect({}).toBe({})
        // expect({}).not.toBe({})
    })
    test("toBe boolean", ()=>{
        // === or triple equal to
        // boolean
        expect(false).toBe(false);
    })
    test("toBe object not", ()=>{
        // === or triple equal to
        // objects
        // expect({}).toBe({})
        expect({}).not.toBe({})
    })
    test("toBe object a === a", ()=>{
        // === or triple equal to
        // objects
        var a={}
        expect(a).toBe(a)
    })
    test("array [] !== []", ()=>{
        expect([]).not.toBe([])
    })
})

describe("toEqual", ()=>{
    test(" array [] isEqual to []", ()=>{
        expect([]).toEqual([])
    })
    test(" array [1,2] isEqual to [1,2]", ()=>{
        expect([1,2]).toEqual([1,2])
    })
    test(" array a=[1,2] isEqual to b=[1,2]", ()=>{
        var a=[1,2], b=[1,2]
        expect(a).toEqual(b)
    })
    test(" array a=[1,2,3] isEqual to b=[1,2]", ()=>{
        var a=[1,2,3], b=[1,2]
        expect(a).toEqual( expect.arrayContaining(b))
    })
    test(" array a=[1,2] isEqual to b=[1,2,3]", ()=>{
        var a=[1,2], b=[1,2,3]
        expect(a).not.toEqual( expect.arrayContaining(b))
    })

    // objects

    test("object check 1", ()=>{
        expect({a: 1}).toEqual({a: 1});
    })

    test("username, email check", ()=>{
        // if
        let obj = { username: "masai", email: "masai@masaischool.com"}
        // schema
        let out = { username: expect.any(String), email: expect.stringContaining("@masaischool.com")}
        expect(obj).toEqual(out);
    })

    test("username contains masai", ()=>{
        let username = ['masai','admin', 'school'];
        expect(username).toContain('masai')
    })
})

describe("value is lessThanorEqual", ()=>{
    test("100+200<=300",()=>{
        var m = 100
        var n = 200
        expect(m+n).toBeLessThanOrEqual(300)
    })
    test("100+200<300",()=>{
        var m = 100
        var n = 100
        expect(m+n).toBeLessThan(300)
    })
    test("100+300>300",()=>{
        var m = 100
        var n = 300
        expect(m+n).toBeGreaterThan(300)
    })
})
