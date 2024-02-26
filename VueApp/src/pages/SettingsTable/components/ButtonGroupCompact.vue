<script lang="ts">
    import styled from "vue3-styled-components";
    import { ref } from "vue"

    const buttonGroupProps = {
        headerBackgroundColor: String,
        headerBorderBottomColor: String,
        headerPadding: String,
        headerGap: String,
        headerBorderRadius: String,
    };

    const styledLabelProps = {
        active: Boolean,
        groupCompactBackgroundColor: String,
    };

    const StyledButtonGroup = styled('div', buttonGroupProps)`
      background-color: var(${props => props.headerBackgroundColor || "" });
      border-bottom: 1px solid var(${props => props.headerBorderBottomColor || "" });
      padding: var(${props => props.headerPadding || "" });
      gap: var(${props => props.headerGap || "" });
      border-radius: var(${props => props.headerBorderRadius || "" });
    `;


    const StyledLabel = styled('label', styledLabelProps)`
      background-color: var(${props => props.active ? props.groupCompactBackgroundColor : "" });

      border-bottom: 1px solid var(${props => props.headerBorderBottomColor || "" });
      padding: var(${props => props.headerPadding || "" });
      gap: var(${props => props.headerGap || "" });
      border-radius: var(${props => props.headerBorderRadius || "" });
    `;


    // const choice = defineModel("choice")
    const selected = ref();
    // function update(event) {
    //     choise = event.target.dataset.value;
    // }

    const handleClick = (event) => {
        debugger
        selected.value = event.target.dataset.value;
    }

    export default {
        name: "ButtonGroupCompact",
        components: { StyledButtonGroup, StyledLabel },

        props: [
            // header
            'headerBackgroundColor',
            'headerBorderBottomColor',
            'headerPadding',
            'headerGap',
            'headerBorderRadius',
            // header title
            'headerTitleColor',
            'headerTitleFontSize',
            'headerTitleLineHeight',

            "groupCompactBackgroundColor",
            'choice',
            'selected'
        ],
        data() {

        },
        setup() {
            return {
                selected,
                handleClick,
                options: [
                    {
                        value: 'default',
                        name: "Default"
                    },
                    {
                        value: 'compact',
                        name: "Compact"
                    }
                ],
                choice: "default",
                groupCompactBackgroundColor: "--color-light-purple-1",

                headerBackgroundColor: "--color-light-neutral-1",
                headerBorderBottomColor: "--color-light-neutral-6",
                headerPadding: "--size-3",
                headerGap: "--size-4",
                headerBorderRadius: "--radius-sm",
                headerTitleColor: "--color-light-neutral-9",
                headerTitleFontSize: "--size-4",
                headerTitleLineHeight: "--size-5",
            }
        }
    }
</script>

<template>
    <StyledButtonGroup
        :headerBackgroundColor="headerBackgroundColor"
        :headerBorderBottomColor="headerBorderBottomColor"
        :headerPadding="headerPadding"
        :headerGap="headerGap"
        :headerBorderRadius="headerBorderRadius"
    >

        <div v-for="(option, index) in options" :key="index">
            <StyledName
                :active="selected?.value == option.value"
                :data-value="option.value"
                :groupCompactBackgroundColor="groupCompactBackgroundColor"
                @click="handleClick"
            >
                {{ option.name }}
            </StyledName>
        </div>

    </StyledButtonGroup>
</template>

<style scoped>

</style>