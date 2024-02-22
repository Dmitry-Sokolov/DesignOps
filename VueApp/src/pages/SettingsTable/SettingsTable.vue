<template>
    <header>
        <h2>Table Settings</h2>
        <div>
            <p>Row Density</p>

        </div>

    </header>

    <div class="row">
        <div class="col-3">
            <h3>Selected columns: {{ count }}</h3>

            <draggable
                id="first"
                class="list-group"
                :list="list1"
                group="people"
                @change="log"
                itemKey="name"
            >

                <template #item="{ element, index }">
                    <li class="list-group-item">
                        <i class="fa fa-align-justify handle"></i>
                        <input type="checkbox" class="form-control" v-model="element.text"/>
                        <span class="text">{{ element.name }} </span>


                        <i class="fa fa-times close" @click="removeAtList1(index)"></i>
                    </li>
                </template>
            </draggable>
        </div>

        <div class="col-3">
            <div>
                <label>
                    <input type="search" />
                </label>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                group="people"
                @change="log"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <li class="list-group-item">
                        <i class="fa fa-align-justify handle"></i>

                        <input type="checkbox" class="form-control" v-model="element.text"/>

                        <span class="text">{{ element.name }} </span>


                        <i class="fa fa-times close" @click="removeAtList1(index)"></i>
                    </li>
                </template>
            </draggable>
        </div>

        <rawDisplayer class="col-3" :value="list1" title="List 1"/>

        <rawDisplayer class="col-3" :value="list2" title="List 2"/>
    </div>

</template>

<script lang="ts">

    // import { VueDraggableNext } from 'vue-draggable-next'
    import draggable from 'vuedraggable'
    import "../../css-variables/base.css";

    export default {
        name: "two-lists",
        display: "Two Lists",
        order: 1,
        components: {
            draggable//: VueDraggableNext
        },
        data() {
            return {
                count: 8,
                list1: [
                    {name: "Dropdown Item", id: 1},
                    {name: "Dropdown Item", id: 2},
                    {name: "Dropdown Item", id: 3},
                    {name: "Dropdown Item", id: 4}
                ],
                list2: [
                    {name: "Dropdown Item", id: 5},
                    {name: "Dropdown Item", id: 6},
                    {name: "Dropdown Item", id: 7}
                ]
            };
        },
        methods: {
            add: function () {
                this.list1.push({name: "Juan", id: 8});
            },
            replace: function () {
                this.list1 = [{name: "Edgard", id: 9}];
            },

            log: function (evt: any) {
                window.console.log(evt);
            },
            removeAtList1(idx: number) {
                this.list1.splice(idx, 1);
            },
        }
    };
</script>

<style scoped>
    .read-the-docs {
        color: #888;
    }
    .list-group-item {
        background-color: var(--color-light-brand-purple);
    }
    .close {
        background: red;
        float: right;
        padding: 8px;
        background: url("src/assets/close.svg") center center ;
    }

</style>
