declare global {
    interface Window {
        BinanceChain: any;
        ethereum: any;
    }
}
declare type WidgetType = 'swap' | 'graph' | 'graph-swap';
interface Props {
    mode?: string;
    type?: string;
    chain?: string;
    themeColor?: string;
    themeTextColor?: string;
    backgroundColorLight?: string;
    backgroundColorDark?: string;
    baseTokenAddress?: string;
    quoteTokenAddress?: string;
    externalTopTokenAddress?: string[];
    graphRange?: number;
    enableGraph?: boolean;
    widgetType?: WidgetType;
    maxWidth?: string;
    height?: string;
    containerStyle?: any;
}
export declare const ArkenWidget: ({ containerStyle, ...props }: Props) => JSX.Element;
export {};
