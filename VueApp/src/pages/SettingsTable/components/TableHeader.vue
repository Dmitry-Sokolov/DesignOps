<script lang="ts">
    import styled from "vue3-styled-components";

    const headerProps = {
        headerBackgroundColor: String,
        headerBorderBottomColor: String,
        headerPadding: String,
        headerGap: String,
        headerBorderRadius: String,
    };

    const headerTitleProps = {
        headerTitleColor: String,
        headerTitleFontSize: String,
        headerTitleLineHeight: String,

    };

    const StyledHeader = styled('header', headerProps)`
      background-color: var(${props => props.headerBackgroundColor });
      border-bottom: 1px solid var(${props => props.headerBorderBottomColor });
      padding: var(${props => props.headerPadding });
      gap: var(${props => props.headerGap });
      border-radius: var(${props => props.headerBorderRadius });
    `;

    const StyledHeaderTitle = styled('h2', headerTitleProps)`
      margin: 0;
      color: var(${props => props.headerTitleColor || "" });
      font-size: var(${props => props.headerTitleFontSize + "px" || "" });
      font-weight: 600;
      line-height: var(${props => props.headerTitleLineHeight + "px" || "" });
    `;

    export default {
        name: "TableHeader",
        components: { StyledHeader, StyledHeaderTitle},
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
        ],
        data() {
            return {
                headerBackgroundColor: "--color-light-neutral-1",
                headerBorderBottomColor: "--color-light-neutral-6",
                headerPadding: "--size-3",
                headerGap: "--size-4",
                headerBorderRadius: "--radius-sm",
                headerTitleColor: "--color-light-neutral-9",
                headerTitleFontSize: "--size-4",
                headerTitleLineHeight: "--size-5",
            }
        },
    }
</script>

<template>
    <StyledHeader
        :headerBackgroundColor="headerBackgroundColor"
        :headerBorderBottomColor="headerBorderBottomColor"
        :headerPadding="headerPadding"
        :headerGap="headerGap"
        :headerBorderRadius="headerBorderRadius"
    >
        <StyledHeaderTitle
            :headerTitleColor="headerTitleColor"
            :headerTitleFontSize="headerTitleFontSize"
            :headerTitleLineHeight="headerTitleLineHeight"
        >
            Table Settings
        </StyledHeaderTitle>
        <div>
            <p>Row Density</p>

        </div>
    </StyledHeader>
</template>

<style scoped>

</style>