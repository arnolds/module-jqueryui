<?php declare(strict_types=1);

namespace Koz\JqueryUI\Block\Product;

use Magento\Catalog\Model\ResourceModel\Product\Collection;
use Magento\Framework\Exception\LocalizedException;

class ListProduct extends \Magento\Catalog\Block\Product\ListProduct
{
    /**
     * Return product name JSON object.
     *
     * @return string
     * @throws LocalizedException
     */
    public function getNames() : string
    {
        /** @var Collection $products */
        $products = $this->getLoadedProductCollection()
            ->addAttributeToSelect('name')
            ->load()
            ->getItems();

        $titles = [];

        foreach ($products as $product) {
            $titles[] = $product->getName();
        }

        return json_encode($titles);
    }
}
