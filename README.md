> *BeCode* <br/>
"In Code We Trust" <br/>
Lovelace 3.9 <br/>

**React Redux & Firebase tutorial**


*Started 06/05/2019*

**Various steps:**
    - Understand React and how components work
    - Add redux middleware (Thunk)
    - Create firebase DB and connect it

It's a good base to undestand NoSql databases and help to start with Rethinkdb ;)

**Redux & Async code:**
 To better understand Async communication, we use a middleware => "Thunk".
  *Thunk:*
    - Halts the dispatch
    - Perform async request 
    - Resume dispatch

```mermaid
  graph TD
    D[Action Creator]
    C[Reducer]
    A((Redux))
    E[Dispatch Action]
    B[Component]

  subgraph 
    D---C
    E---|dispatches an action - e.g. addpost <br/> Contains optional payloads|B
    subgraph  
      D---|Thunk: <br/> Halt the dispatch <br/> Perform async request <br/> Resume dispatch|E
    end
    subgraph 
      C---|Update central state|A
      A---|subscribe to changes - props|B
    end
  end
```
